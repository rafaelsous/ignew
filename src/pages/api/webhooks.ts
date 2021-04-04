import { NextApiResponse } from "next";
import { NextApiRequest } from "next-auth/_next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log('Evento recebido')

  return response.status(200).json({ ok: true })
}