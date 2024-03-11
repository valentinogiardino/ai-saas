"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("74c2a58f-8975-4921-b06d-4260067b207a");
  }, []);

  return null;
};