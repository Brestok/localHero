import { Card, CardContent } from "./ui/Card";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

function PostList({ posts }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent>
            <h3 className="text-lg font-bold">{post.text}</h3>
            <p>Требуется: {post.peopleNeeded} чел.</p>
            <p>
              Когда:{" "}
              {format(new Date(post.dateTime), "dd MMMM yyyy HH:mm", {
                locale: ru,
              })}
            </p>
            <p>Оплата: {post.payment} BYN</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PostList;
