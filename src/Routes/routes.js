import { Men } from '../pages/men';
import { Women } from '../pages/women';
import { Sale } from '../pages/sale/sale';
import { Children } from '../pages/children';
import { Colection } from '../pages/colection';
import { NoteFound } from '../pages/note-found';
import {ProductSingle} from '../pages/Product-single'
import { nanoid } from 'nanoid';

export const routes = [
  {
    Component: Men,
    path: '/',
    id: nanoid(),
  },
  {
    Component: Women,
    path: '/women',
    id: nanoid(),
  },
  {
    Component: Sale,
    path: '/sale',
    id: nanoid(),
  },
  {
    Component: Children,
    path: '/children',
    id: nanoid(),
  },
  {
    Component: Colection,
    path: '/colection',
    id: nanoid(),
  },
  {
    Component: ProductSingle,
    path: "products/ProductSingle/:id",
    id: nanoid(),
  },
  {
    Component: NoteFound,
    path: '*',
    id: nanoid(),
  }
];
