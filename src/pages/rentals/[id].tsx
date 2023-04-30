import { Apartment, Catalog } from "@/reducers/dataSlice";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React from "react";

type Props = {
  apartment: Apartment;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await import("../../../data.json");
  const data = response.catalog;
  const paths = data.flatMap((item: Catalog) => {
    return item.apartments.map((apartment: Apartment) => {
      return {
        params: {
          id: apartment.id.toString(),
        },
      };
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await import("../../../data.json");
  const data = response.catalog;

  const apartment = data
    .flatMap((item: Catalog) => item.apartments)
    .find((apartment: Apartment) => apartment.id === Number(params?.id));

  return {
    props: {
      apartment,
    },
  };
};
const ApartmentPage: NextPage<Props> = ({ apartment }) => {
  console.log(apartment);
  return <div>Rentals</div>;
};
export default ApartmentPage;
