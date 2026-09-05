import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/migliori-casino-scelti")({
  beforeLoad: () => {
    throw redirect({ to: "/migliori-casino-online-adm", statusCode: 301 });
  },
  component: () => null,
});
