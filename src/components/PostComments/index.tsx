// src/components/PostComments/index.tsx
import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

const PostComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddComment = () => {
    setComments([...comments, { id: comments.length, text: inputValue }]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Comments</h2>
      <input
        data-testid="comment-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a comment"
      />
      <button data-testid="add-comment-btn" onClick={handleAddComment}>Add Comment</button>
      <ul data-testid="comments-list">
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
