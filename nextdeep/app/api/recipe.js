// /pages/api/recipes.js
export default async function handler(req, res) {
    const { query } = req.query;
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipes" });
    }
}
