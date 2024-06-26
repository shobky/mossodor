"use client"
import { clearCartThunk } from "@/lib/redux/slices/cart/thunks/clearCartThunk";
import { useDispatch } from "@/lib/redux/store";
import React, { useEffect } from "react";

export default function ClearCartOnSuccessfulOrder({
  success,
}: {
  success: boolean;
}) {    
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      dispatch(clearCartThunk());
    }
  }, [success]);
  return null;
}
