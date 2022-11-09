// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.body ){
    console.log("response",req.body);
      res.status(200).json({data: JSON.stringify(req.body)});

  }
  
}
