// src/components/PostComments/PostComments.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostComments from './index';

test('should add two comments to the list', () => {
  render(<PostComments />);

  const input = screen.getByTestId('comment-input');
  const addButton = screen.getByTestId('add-comment-btn');
  const commentsList = screen.getByTestId('comments-list');

  // Inserir primeiro comentário
  fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(addButton);
  
  // Inserir segundo comentário
  fireEvent.change(input, { target: { value: 'Segundo comentário' } });
  fireEvent.click(addButton);

  // Verificar se os dois comentários foram adicionados
  expect(commentsList).toHaveTextContent('Primeiro comentário');
  expect(commentsList).toHaveTextContent('Segundo comentário');
});
