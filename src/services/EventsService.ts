import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IEvent } from "../models/IEvent";

export const eventsAPI = createApi({
  reducerPath: "eventsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://my-json-server.typicode.com/PushkarevAR/mockjson" }),
  tagTypes: ["Event"],
  endpoints: (build) => ({
    fetchAllEvents: build.query<IEvent[], number>({
      query: (limit: number = 5) => ({
        url: "/events",
      }),
      providesTags: (result) => ["Event"],
    }),
    createEvent: build.mutation<IEvent, IEvent>({
      query: (event) => ({
        url: "/events",
        method: "POST",
        body: event,
      }),
      invalidatesTags: ["Event"],
    }),
    deleteEvent: build.mutation<IEvent, IEvent>({
      query: (event) => ({
        url: `/events/${event.id}`,
        method: "DELETE",
        body: event,
      }),
      invalidatesTags: ["Event"],
    }),
  }),
});
