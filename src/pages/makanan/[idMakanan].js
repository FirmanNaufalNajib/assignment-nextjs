import axios from "axios";
import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import FoodLayout from "@/layout/FoodLayout";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.idMakanan}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", kataKunci: "Kopi enak bikin kembung" },
  });

  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const { loading, post } = usePost();
  const router = useRouter()

  const handleUpdateFood = async ({ name, imageUrl, description, ingredients }) => {
    post(`/update-food/${food.id}`, { name, imageUrl, description, ingredients });
  };

  const handleDelete = async () => {
    try {
    await axios.delete(`https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`, {
      headers: {
        "Content-Type": " application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
      }

    });
    router.push('/makanan')
    } catch (error) {
      console.error("Error deleting food:", error);
    }
}
  

  return (
    <FoodLayout>
    <div className="food-detail-container">
      <img src={food?.imageUrl} className="w-64 aspect-video" />
      <FoodForm 
        title={`Update ${food.name}`}
        defaultNama={food.name}
        defaultUrlGambar={food.imageUrl}
        loading={loading}
        onSubmitFood={handleUpdateFood}
        onDeleteFood={handleDelete}
      />
    <button
      type="button"
      className="delete-button"
      onClick={handleDelete}
      >
      DELETE
    </button>
    </div>
      
    </FoodLayout>
  );
}
