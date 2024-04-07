export default function FoodForm({ title, defaultNama, defaultUrlGambar, onSubmitFood, loading}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("namaMakanan");
    const imageUrl = formData.get("gambarMakanan");
    const description = formData.get("deskripsiMakanan")
    const ingredientsString = formData.get("resepMakanan", [])
    const ingredients = ingredientsString.split(',').map(ingredient => ingredient.trim());

    onSubmitFood({ name, imageUrl, description, ingredients});
    
  };

  

  return (
    <form  onSubmit={handleSubmit} className="form-container grid w-1/2 justify-center gap-2">
      <h5 className="text-xl text-center font-bold">{title}</h5>
    
      <label>Nama:</label>
      <input defaultValue={defaultNama} name="namaMakanan" className="text-black" placeholder="nama makanan" />

      <label>URL Gambar:</label>
      <input defaultValue={defaultUrlGambar} name="gambarMakanan" className="text-black" placeholder="url gambar" />

      <label>Description:</label>
      <input  name="deskripsiMakanan" className="text-black" placeholder="Description" />

      <label>Ingredients:</label>
      <input name="resepMakanan" className="text-black" placeholder="ingredients (comma-separated)" />

      <button
        type="submit"
        disabled={loading}
        className={`${loading ? "bg-gray-500" : "bg-blue-500"} p-1 rounded-full`}
      >
        {title}
      </button>
    </form>
  );
}
