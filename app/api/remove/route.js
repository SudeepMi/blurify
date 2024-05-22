import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(Request, Response) {
  try {
    const data = await Request.formData();
    console.log(data.get("image_file"));
    var myHeaders = new Headers();
    myHeaders.append("apikey", process.env.API_KEY);

    var raw = data.get("image_file");

    var requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };
    const response = await fetch("https://api.apilayer.com/face_pixelizer/upload", requestOptions)
      .then((response) => {
      return response.json();
    });
   
    if(response.message){
      return NextResponse.json(response,{status: 400});
    }else{
      return NextResponse.json(response,{status: 200});
    }

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
}
