import type { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

import { api } from "./api";
import type { Note } from "@/types/note";
import type { User } from "@/types/user";
import type { FetchNotesParams } from "./clientApi";

type NotesApiResponse = { notes: Note[]; totalPages: number } | Note[];

function normalizeNotesResponse(data: NotesApiResponse) {
  if (Array.isArray(data)) {
    return { notes: data, totalPages: 1 };
  }
  return data;
}

async function buildCookieHeader(): Promise<string> {
  const store = await cookies();
  return store
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
}

function withCookies(cookieHeader: string): AxiosRequestConfig {
  return cookieHeader ? { headers: { Cookie: cookieHeader } } : {};
}

// Notes (SSR)
export async function fetchNotes(params: FetchNotesParams) {
  const cookieHeader = await buildCookieHeader();

  const { data } = await api.get<NotesApiResponse>("/notes", {
    ...withCookies(cookieHeader),
    params,
  });

  return normalizeNotesResponse(data);
}

export async function fetchNoteById(id: Note["id"]) {
  const cookieHeader = await buildCookieHeader();

  const { data } = await api.get<Note>(
    `/notes/${id}`,
    withCookies(cookieHeader),
  );

  return data;
}

// Users (SSR)
export async function getMe() {
  const cookieHeader = await buildCookieHeader();

  const { data } = await api.get<User>("/users/me", withCookies(cookieHeader));
  return data;
}

// Auth (SSR)
export async function checkSession(): Promise<User | null> {
  const cookieHeader = await buildCookieHeader();

  const { data } = await api.get<User | "" | null | undefined>(
    "/auth/session",
    withCookies(cookieHeader),
  );

  if (!data || typeof data !== "object") return null;
  return data as User;
}
