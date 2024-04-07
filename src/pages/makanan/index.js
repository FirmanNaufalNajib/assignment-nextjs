import FoodLayout from "@/layout/FoodLayout";
import axios from "axios";
import Link from "next/link";


export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods?page=${context.query.page}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
  });
  console.log(resp.data.data)
  return { props: { foods: resp.data.data } };
}

export default function Home({ foods }) {
  return (
    <FoodLayout>
      <div className="container-food-list">
        {foods.map((food) => (
          <Link href={`/makanan/${food.id}`}>
          <div className="food-list">
            <img src={food.imageUrl} className="w-64 aspect-video" />
            <h4>{food.name}</h4>
            <p>{food.description}</p>
            <p><b>bahan-bahan:</b> {food.ingredients.join(', ')}</p>
          </div>
          </Link>
        ))}
      </div>
    </FoodLayout>
  );
}
