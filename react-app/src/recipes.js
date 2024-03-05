const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    image: "../public/images/spaghetti.jpeg",
    regular: {
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
        "olive oil",
        "salt",
        "pepper",
      ],
      instructions: [
        "1. Cook spaghetti according to package instructions.",
        "2. In a separate pan, sauté chopped onion and garlic in olive oil.",
        "3. Add ground beef and cook until browned.",
        "4. Season with salt and pepper. Serve over cooked spaghetti.",
      ],
    },
    vegan: {
      ingredients: [
        "spaghetti",
        "lentils",
        "tomato sauce",
        "onion",
        "garlic",
        "olive oil",
        "salt",
        "pepper",
      ],
      instructions: [
        "1. Cook spaghetti according to package instructions.",
        "2. In a separate pan, sauté chopped onion and garlic in olive oil.",
        "3. Add cooked lentils and tomato sauce.",
        "4. Season with salt and pepper. Serve over cooked spaghetti.",
      ],
    },
  },
  {
    id: 2,
    name: "Vegetable Stir-Fry",
    image: "../public/images/stirFry.jpeg",
    regular: {
      ingredients: [
        "mixed vegetables (bell peppers, broccoli, carrots, etc.)",
        "tofu",
        "soy sauce",
        "ginger",
        "garlic",
        "sesame oil",
      ],
      instructions:
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender. Add soy sauce and cook for an additional minute. Serve hot.",
    },
    vegan: {
      ingredients: [
        "mixed vegetables (bell peppers, broccoli, carrots, etc.)",
        "tempeh",
        "soy sauce",
        "ginger",
        "garlic",
        "sesame oil",
      ],
      instructions:
        "Stir-fry mixed vegetables, tempeh, ginger, and garlic in sesame oil until vegetables are tender. Add soy sauce and cook for an additional minute. Serve hot.",
    },
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    image: "../public/images/cookies.jpeg",
    regular: {
      ingredients: [
        "flour",
        "butter",
        "sugar",
        "brown sugar",
        "vanilla extract",
        "baking soda",
        "salt",
        "chocolate chips",
      ],
      instructions:
        "Preheat oven to 350°F (175°C). Cream together butter, sugar, and brown sugar. Beat in eggs and vanilla. Combine flour, baking soda, and salt; gradually add to creamed mixture. Stir in chocolate chips. Drop by tablespoonfuls onto ungreased baking sheets. Bake for 8 to 10 minutes or until golden brown. Cool on wire racks.",
    },
    vegan: {
      ingredients: [
        "flour",
        "vegan butter",
        "sugar",
        "brown sugar",
        "vanilla extract",
        "baking soda",
        "salt",
        "vegan chocolate chips",
      ],
      instructions:
        "Preheat oven to 350°F (175°C). Cream together vegan butter, sugar, and brown sugar. Beat in flax eggs and vanilla. Combine flour, baking soda, and salt; gradually add to creamed mixture. Stir in vegan chocolate chips. Drop by tablespoonfuls onto ungreased baking sheets. Bake for 8 to 10 minutes or until golden brown. Cool on wire racks.",
    },
  },
  {
    id: 4,
    name: "Caprese Salad",
    image: "../public/images/salad.jpeg",
    regular: {
      ingredients: [
        "tomatoes",
        "fresh mozzarella cheese",
        "fresh basil leaves",
        "balsamic vinegar",
        "olive oil",
        "salt",
        "pepper",
      ],
      instructions:
        "Slice tomatoes and fresh mozzarella cheese. Arrange on a plate with fresh basil leaves. Drizzle with balsamic vinegar and olive oil. Season with salt and pepper to taste.",
    },
    vegan: {
      ingredients: [
        "tomatoes",
        "vegan mozzarella cheese",
        "fresh basil leaves",
        "balsamic vinegar",
        "olive oil",
        "salt",
        "pepper",
      ],
      instructions:
        "Slice tomatoes and vegan mozzarella cheese. Arrange on a plate with fresh basil leaves. Drizzle with balsamic vinegar and olive oil. Season with salt and pepper to taste.",
    },
  },
  {
    id: 5,
    name: "Chickpea Curry",
    image: "../public/images/curry.jpeg",
    regular: {
      ingredients: [
        "chickpeas",
        "coconut milk",
        "onion",
        "garlic",
        "ginger",
        "curry powder",
        "cumin",
        "coriander",
        "turmeric",
        "salt",
        "pepper",
      ],
      instructions:
        "In a large pan, sauté chopped onion, garlic, and ginger until softened. Add curry powder, cumin, coriander, and turmeric; cook for 1 minute. Stir in chickpeas and coconut milk. Simmer for 10-15 minutes. Season with salt and pepper to taste. Serve hot over rice.",
    },
    vegan: {
      ingredients: [
        "chickpeas",
        "coconut milk",
        "onion",
        "garlic",
        "ginger",
        "curry powder",
        "cumin",
        "coriander",
        "turmeric",
        "salt",
        "pepper",
      ],
      instructions:
        "In a large pan, sauté chopped onion, garlic, and ginger until softened. Add curry powder, cumin, coriander, and turmeric; cook for 1 minute. Stir in chickpeas and coconut milk. Simmer for 10-15 minutes. Season with salt and pepper to taste. Serve hot over rice.",
    },
  },
];

export default recipes;
