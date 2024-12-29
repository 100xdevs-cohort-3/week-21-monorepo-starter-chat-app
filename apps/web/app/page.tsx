"use client";
import { TextInput } from "@repo/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <TextInput size="small" placeholder="Room name"></TextInput>
        <button onClick={() => {
          router.push("/chat/123")
        }}>Join room</button>
      </div>
    </div>
  );
}
