import { serve } from "https://deno.land/std@0.147.0/http/server.ts";

serve((_req) => new Response("Hello Deno!! con Denon"), { port: 8090 });
console.log("Server run on http://localhost:8090");
