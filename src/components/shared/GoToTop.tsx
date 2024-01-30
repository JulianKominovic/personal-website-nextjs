"use client";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export default function GoToTop(props: typeof Button.defaultProps) {
  return (
    <Button
      variant="secondary"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      {...props}
    >
      <ArrowUp />
    </Button>
  );
}
