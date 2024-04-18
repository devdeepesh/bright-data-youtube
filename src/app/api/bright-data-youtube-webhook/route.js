import service from "@/service/server";
import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param { NextRequest } request
 */
export async function POST(request) {
  // get body safely
  const body = await (async () => {
    try {
      return await request.json();
    } catch (error) {
      return null;
    }
  })();

  const { success } = await service.insertScrappedData(data);

  return NextResponse.json(
    { success },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
