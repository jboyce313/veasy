const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    time: "30min",
    difficulty: "Easy",
    image: "/veasy/images/spaghetti.jpeg",
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
        "Cook spaghetti according to package instructions.",
        "In a separate pan, sauté chopped onion and garlic in olive oil.",
        "Add ground beef and cook until browned.",
        "Season with salt and pepper. Serve over cooked spaghetti.",
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
        "Cook spaghetti according to package instructions.",
        "In a separate pan, sauté chopped onion and garlic in olive oil.",
        "Add cooked lentils and tomato sauce.",
        "Season with salt and pepper. Serve over cooked spaghetti.",
      ],
    },
  },
  {
    id: 2,
    name: "Vegetable Stir-Fry",
    image: "/veasy/images/stirFry.jpeg",
    time: "40min",
    difficulty: "Easy",
    regular: {
      ingredients: [
        "mixed vegetables (bell peppers, broccoli, carrots, etc.)",
        "tofu",
        "soy sauce",
        "ginger",
        "garlic",
        "sesame oil",
      ],
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
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
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
    },
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    image: "/veasy/images/cookies.jpeg",
    time: "15min",
    difficulty: "Easy",
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
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
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
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
    },
  },
  {
    id: 4,
    name: "Caprese Salad",
    image: "/veasy/images/salad.jpeg",
    time: "20min",
    difficulty: "Easy",
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
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
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
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
    },
  },
  {
    id: 5,
    name: "Chickpea Curry",
    image: "/veasy/images/curry.jpeg",
    time: "60min",
    difficulty: "Intermediate",
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
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
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
      instructions: [
        "Stir-fry mixed vegetables, tofu, ginger, and garlic in sesame oil until vegetables are tender.",
        "Add soy sauce and cook for an additional minute.",
        "Serve hot.",
      ],
    },
  },
];

export default recipes;
