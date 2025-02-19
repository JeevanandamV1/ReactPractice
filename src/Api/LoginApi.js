import React from "react";

export default async function LoginAPICall(payload) {
  console.log(`payload : ${payload}`);
  const userData = payload;

  console.log(`userData : ${userData}`);
  try {
  } catch (error) {
    console.error(`error message : ${error.message}`);
  }
}
