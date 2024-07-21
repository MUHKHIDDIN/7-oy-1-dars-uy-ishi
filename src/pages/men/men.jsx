import React from "react";
import { Bunnor } from "../../components/bunnor";
import { Menu } from "../../components/menu";
import { News } from "../../components/news";
import { Product } from "../../components/product";
import{Brend} from "../../components/brend"
import {Product2} from "../../components/product2"
export const Men = () => {
  return (
    <div className="container">
      <section>
        <Bunnor />
      </section>
      <section>
        <Menu />
      </section>
      <section>
        <News />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Brend/>
      </section>
      <section>
        <Product2/>
      </section>
    </div>
  );
};
