// Nutrition functionality for FitnessPal

// Nutrition data
const nutritionData = {
    breakfast: [
        {
            name: "Greek Yogurt with Berries",
            calories: 450,
            protein: 35,
            carbs: 45,
            fat: 15,
            ingredients: "Greek yogurt, mixed berries, honey, almonds",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Mix Greek yogurt with berries, drizzle with honey, and top with almonds."
        },
        {
            name: "Avocado Toast with Eggs",
            calories: 500,
            protein: 25,
            carbs: 40,
            fat: 25,
            ingredients: "Whole grain bread, avocado, eggs, cherry tomatoes, olive oil",
            image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Mash avocado on toast, top with fried eggs and cherry tomatoes, drizzle with olive oil."
        }
    ],
    lunch: [
        {
            name: "Grilled Chicken Salad",
            calories: 550,
            protein: 40,
            carbs: 35,
            fat: 25,
            ingredients: "Chicken breast, mixed greens, cherry tomatoes, cucumber, olive oil, lemon juice",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Grill chicken breast, slice and serve over mixed greens with vegetables. Dress with olive oil and lemon juice."
        },
        {
            name: "Quinoa Bowl with Vegetables",
            calories: 500,
            protein: 20,
            carbs: 65,
            fat: 18,
            ingredients: "Quinoa, roasted vegetables, chickpeas, tahini dressing",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Cook quinoa, top with roasted vegetables and chickpeas, drizzle with tahini dressing."
        }
    ],
    dinner: [
        {
            name: "Salmon with Sweet Potato",
            calories: 600,
            protein: 45,
            carbs: 50,
            fat: 25,
            ingredients: "Salmon fillet, sweet potato, asparagus, olive oil, herbs",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Bake salmon with herbs, roast sweet potato and asparagus with olive oil."
        },
        {
            name: "Lean Beef Stir Fry",
            calories: 550,
            protein: 40,
            carbs: 45,
            fat: 20,
            ingredients: "Lean beef strips, broccoli, bell peppers, brown rice, soy sauce",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Stir-fry beef with vegetables, serve over brown rice with soy sauce."
        }
    ],
    snacks: [
        {
            name: "Protein Shake",
            calories: 250,
            protein: 30,
            carbs: 20,
            fat: 5,
            ingredients: "Protein powder, almond milk, banana, peanut butter",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Blend all ingredients until smooth."
        },
        {
            name: "Apple with Almond Butter",
            calories: 200,
            protein: 5,
            carbs: 25,
            fat: 10,
            ingredients: "Apple, almond butter, cinnamon",
            image: "https://images.unsplash.com/photo-1570913149827-b2d2d6c5d489?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            recipe: "Slice apple and serve with almond butter, sprinkle with cinnamon."
        }
    ]
};

// Initialize nutrition page
function initNutrition() {
    // Display meal recommendations based on time of day
    const now = new Date();
    const hour = now.getHours();
    
    let mealType = 'breakfast';
    if (hour >= 11 && hour < 16) {
        mealType = 'lunch';
    } else if (hour >= 16) {
        mealType = 'dinner';
    }
    
    displayMealRecommendations(mealType);
    
    // Add event listeners to meal type buttons
    document.querySelectorAll('.meal-type-btn').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-meal-type');
            displayMealRecommendations(type);
            
            // Update active button
            document.querySelectorAll('.meal-type-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Display meal recommendations for a specific type
function displayMealRecommendations(type) {
    const mealsContainer = document.getElementById('meals-container');
    const meals = nutritionData[type];
    
    mealsContainer.innerHTML = '';
    
    meals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-card';
        mealCard.innerHTML = `
            <div class="meal-image" style="background-image: url('${meal.image}')"></div>
            <div class="meal-content">
                <h3>${meal.name}</h3>
                <div class="meal-macros">
                    <span class="macro">Calories: ${meal.calories}</span>
                    <span class="macro">Protein: ${meal.protein}g</span>
                    <span class="macro">Carbs: ${meal.carbs}g</span>
                    <span class="macro">Fat: ${meal.fat}g</span>
                </div>
                <p><strong>Ingredients:</strong> ${meal.ingredients}</p>
                <button class="btn view-recipe" data-meal='${JSON.stringify(meal).replace(/'/g, "\\'")}'>View Recipe</button>
            </div>
        `;
        mealsContainer.appendChild(mealCard);
    });
    
    // Add event listeners to recipe buttons
    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', function() {
            const meal = JSON.parse(this.getAttribute('data-meal'));
            showRecipeModal(meal);
        });
    });
}

// Show recipe modal
function showRecipeModal(meal) {
    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('recipe-content');
    
    modalContent.innerHTML = `
        <h2>${meal.name}</h2>
        <div class="recipe-image" style="background-image: url('${meal.image}')"></div>
        <div class="recipe-details">
            <div class="recipe-macros">
                <span class="macro">Calories: ${meal.calories}</span>
                <span class="macro">Protein: ${meal.protein}g</span>
                <span class="macro">Carbs: ${meal.carbs}g</span>
                <span class="macro">Fat: ${meal.fat}g</span>
            </div>
            <h3>Ingredients</h3>
            <p>${meal.ingredients}</p>
            <h3>Recipe</h3>
            <p>${meal.recipe}</p>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Close modal
    document.getElementById('close-recipe-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initNutrition, nutritionData };
}