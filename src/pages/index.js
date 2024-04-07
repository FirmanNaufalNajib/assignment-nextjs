import FoodLayout from "@/layout/FoodLayout";
import axios from "axios";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods?page=${context.query.page}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
  });

  return { props: { foods: resp.data.data } };
}

export default function Home({ foods }) {
  return (
    <FoodLayout>
      <div className="home-container">
      <h1>SELAMAT DATANG</h1>
      <img src="https://th.bing.com/th/id/OIP.H_W82aj3ubdYm38ZkQ2V1gAAAA?rs=1&pid=ImgDetMain"/>
      <h1>UI DALAM PENGERJAAN</h1>
      </div>
    </FoodLayout>
  );
}
