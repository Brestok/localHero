import React, { useState } from "react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { User, MessageCircle } from "lucide-react";

function PostCard({ post, addReply }) {
  const [reply, setReply] = useState("");

  return (
    <Card className={post.type === "offer" ? "bg-green-100" : "bg-blue-100"}>
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <div>
            <p className="font-bold">{post.user}</p>
            <p>{post.text}</p>
          </div>
        </div>
        <div className="mt-2 space-y-2">
          {post.replies.map((reply) => (
            <div key={reply.id} className="bg-gray-200 p-2 rounded-md">
              <p className="text-sm font-bold">{reply.user}</p>
              <p className="text-sm">{reply.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <Input
            placeholder="Напишите ответ..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              addReply(post.id, reply);
              setReply("");
            }}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PostCard;
