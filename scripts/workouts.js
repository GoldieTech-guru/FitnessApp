// Workouts functionality for FitnessPal

// Workout data
const workoutData = {
    glutes: {
        title: "Glute Building Program",
        image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "4 weeks",
        intensity: "Medium to High",
        equipment: "Resistance bands, Dumbbells, Barbell",
        description: "This 4-week intensive program is designed to help you build and shape your glutes through targeted exercises and progressive overload.",
        exercises: [
            {
                name: "Hip Thrusts",
                sets: "3 sets of 12 reps",
                description: "Focus on squeezing your glutes at the top of the movement."
            },
            {
                name: "Bulgarian Split Squats",
                sets: "3 sets of 10 reps each leg",
                description: "Keep your front knee aligned with your ankle."
            },
            {
                name: "Romanian Deadlifts",
                sets: "3 sets of 12 reps",
                description: "Maintain a slight bend in your knees and focus on hinging at the hips."
            },
            {
                name: "Glute Bridges",
                sets: "3 sets of 15 reps",
                description: "Squeeze your glutes at the top and hold for 2 seconds."
            },
            {
                name: "Cable Kickbacks",
                sets: "3 sets of 12 reps each leg",
                description: "Keep your core engaged and avoid arching your back."
            }
        ],
        mealRecommendation: {
            title: "High-Protein Glute Building Meal",
            description: "After glute workouts, your muscles need protein for recovery and growth.",
            ingredients: "Grilled salmon, sweet potato, asparagus, olive oil",
            macros: "Protein: 35g, Carbs: 50g, Fat: 15g",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    },
    weightloss: {
        title: "Weight Loss Program",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "8 weeks",
        intensity: "High",
        equipment: "Treadmill, Dumbbells, Mat",
        description: "This cardio and strength training combination is designed to maximize calorie burn and help you lose weight effectively.",
        exercises: [
            {
                name: "Interval Running",
                sets: "20 minutes (1 min sprint, 2 min walk)",
                description: "High intensity interval training to boost metabolism."
            },
            {
                name: "Circuit Training",
                sets: "3 rounds of 10 exercises",
                description: "Full body workout with minimal rest between exercises."
            },
            {
                name: "Jumping Rope",
                sets: "5 sets of 2 minutes",
                description: "Great for cardiovascular health and calorie burning."
            },
            {
                name: "Bodyweight Squats",
                sets: "4 sets of 15 reps",
                description: "Focus on form and controlled movements."
            },
            {
                name: "Mountain Climbers",
                sets: "4 sets of 30 seconds",
                description: "Engage your core and maintain a steady pace."
            }
        ],
        mealRecommendation: {
            title: "Low-Calorie Nutrient Dense Meal",
            description: "After weight loss workouts, fuel your body with nutrient-dense, low-calorie foods.",
            ingredients: "Grilled chicken breast, quinoa, mixed greens, lemon vinaigrette",
            macros: "Protein: 30g, Carbs: 35g, Fat: 8g",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    },
    musclegain: {
        title: "Muscle Gain Program",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "12 weeks",
        intensity: "High",
        equipment: "Barbell, Dumbbells, Bench",
        description: "This strength-focused training program is designed to help you build muscle mass through progressive overload and proper nutrition.",
        exercises: [
            {
                name: "Barbell Bench Press",
                sets: "4 sets of 8-10 reps",
                description: "Focus on controlled movement and full range of motion."
            },
            {
                name: "Barbell Squats",
                sets: "4 sets of 8-10 reps",
                description: "Keep your chest up and back straight throughout the movement."
            },
            {
                name: "Deadlifts",
                sets: "4 sets of 6-8 reps",
                description: "Maintain a neutral spine and engage your core."
            },
            {
                name: "Pull-Ups",
                sets: "4 sets to failure",
                description: "Use assistance if needed to maintain proper form."
            },
            {
                name: "Overhead Press",
                sets: "4 sets of 8-10 reps",
                description: "Keep your core tight and avoid arching your back."
            }
        ],
        mealRecommendation: {
            title: "High-Calorie Muscle Building Meal",
            description: "After intense strength training, your body needs ample calories and protein for muscle growth.",
            ingredients: "Lean beef, brown rice, broccoli, avocado",
            macros: "Protein: 45g, Carbs: 60g, Fat: 20g",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    },
    abs: {
        title: "Core & Abs Program",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "6 weeks",
        intensity: "Medium",
        equipment: "Mat, Stability ball, Dumbbells",
        description: "This program focuses on strengthening your core and developing defined abdominal muscles through targeted exercises.",
        exercises: [
            {
                name: "Plank",
                sets: "3 sets of 60 seconds",
                description: "Keep your body in a straight line and engage your core."
            },
            {
                name: "Russian Twists",
                sets: "3 sets of 20 reps",
                description: "Rotate your torso and keep your feet off the ground."
            },
            {
                name: "Leg Raises",
                sets: "3 sets of 15 reps",
                description: "Keep your lower back pressed into the floor."
            },
            {
                name: "Bicycle Crunches",
                sets: "3 sets of 20 reps",
                description: "Focus on bringing your elbow to the opposite knee."
            },
            {
                name: "Mountain Climbers",
                sets: "3 sets of 30 seconds",
                description: "Bring your knees to your chest in a controlled motion."
            }
        ],
        mealRecommendation: {
            title: "Lean Core Definition Meal",
            description: "After core workouts, support muscle definition with lean proteins and complex carbs.",
            ingredients: "Tuna steak, quinoa, roasted vegetables, olive oil",
            macros: "Protein: 35g, Carbs: 40g, Fat: 10g",
            image: "https://images.unsplash.com/photo-1559847844-d4a3dafd6f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    }
};

// Initialize workout modals
function initWorkoutModals() {
    const workoutCards = document.querySelectorAll('.workout-option-card');
    const workoutModal = document.getElementById('workout-modal');
    const workoutDetails = document.getElementById('workout-details');
    const closeModal = document.getElementById('close-modal');
    
    workoutCards.forEach(card => {
        card.addEventListener('click', function() {
            const workoutType = this.getAttribute('data-workout');
            const workout = workoutData[workoutType];
            
            // Get user-specific completed exercises
            const userEmail = localStorage.getItem('userEmail') || 'default';
            const completedExercises = JSON.parse(localStorage.getItem(`completed-${userEmail}-${workoutType}`)) || [];
            
            // Check if all exercises are completed
            const allCompleted = completedExercises.length === workout.exercises.length;
            
            // Populate modal with workout data
            workoutDetails.innerHTML = `
                <h2>${workout.title}</h2>
                <div class="workout-info">
                    <div class="workout-image" style="background-image: url('${workout.image}')"></div>
                    <div class="workout-meta">
                        <h3>Program Details</h3>
                        <div class="meta-item">
                            <i class="fas fa-calendar-alt"></i>
                            <span>Duration: ${workout.duration}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-bolt"></i>
                            <span>Intensity: ${workout.intensity}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-dumbbell"></i>
                            <span>Equipment: ${workout.equipment}</span>
                        </div>
                        <p>${workout.description}</p>
                    </div>
                </div>
                <div class="exercises-list">
                    <h3>Exercises</h3>
                    ${workout.exercises.map((exercise, index) => `
                        <div class="exercise-item">
                            <input type="checkbox" class="exercise-checkbox" data-workout="${workoutType}" data-index="${index}" 
                                ${completedExercises.includes(index) ? 'checked' : ''}>
                            <div class="exercise-content">
                                <h4>${exercise.name}</h4>
                                <p><strong>${exercise.sets}</strong> - ${exercise.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${allCompleted ? `
                <div class="completion-message">
                    <i class="fas fa-trophy"></i> Today's program completed! Great job!
                </div>
                ` : ''}
                <div class="meal-recommendations" style="margin-top: 30px;">
                    <h3>Recommended Meal After This Workout</h3>
                    <div class="meal-card">
                        <div class="meal-image" style="background-image: url('${workout.mealRecommendation.image}')"></div>
                        <div class="meal-content">
                            <h3>${workout.mealRecommendation.title}</h3>
                            <p>${workout.mealRecommendation.description}</p>
                            <p><strong>Ingredients:</strong> ${workout.mealRecommendation.ingredients}</p>
                            <div class="meal-macros">
                                <span class="macro">${workout.mealRecommendation.macros.split(', ')[0]}</span>
                                <span class="macro">${workout.mealRecommendation.macros.split(', ')[1]}</span>
                                <span class="macro">${workout.mealRecommendation.macros.split(', ')[2]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Add event listeners to checkboxes
            const checkboxes = workoutDetails.querySelectorAll('.exercise-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const workoutType = this.getAttribute('data-workout');
                    const exerciseIndex = parseInt(this.getAttribute('data-index'));
                    const userEmail = localStorage.getItem('userEmail') || 'default';
                    let completedExercises = JSON.parse(localStorage.getItem(`completed-${userEmail}-${workoutType}`)) || [];
                    
                    if (this.checked) {
                        // Add to completed if not already there
                        if (!completedExercises.includes(exerciseIndex)) {
                            completedExercises.push(exerciseIndex);
                        }
                    } else {
                        // Remove from completed
                        completedExercises = completedExercises.filter(i => i !== exerciseIndex);
                    }
                    
                    localStorage.setItem(`completed-${userEmail}-${workoutType}`, JSON.stringify(completedExercises));
                    
                    // Check if all exercises are now completed
                    const workout = workoutData[workoutType];
                    const allCompleted = completedExercises.length === workout.exercises.length;
                    
                    // Show completion message if all exercises are completed
                    if (allCompleted) {
                        if (!document.querySelector('.completion-message')) {
                            const completionMessage = document.createElement('div');
                            completionMessage.className = 'completion-message';
                            completionMessage.innerHTML = '<i class="fas fa-trophy"></i> Today\'s program completed! Great job!';
                            workoutDetails.appendChild(completionMessage);
                        }
                    } else {
                        // Remove completion message if it exists
                        const completionMessage = document.querySelector('.completion-message');
                        if (completionMessage) {
                            completionMessage.remove();
                        }
                    }
                });
            });
            
            // Show modal
            workoutModal.style.display = 'flex';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        workoutModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === workoutModal) {
            workoutModal.style.display = 'none';
        }
    });
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initWorkoutModals, workoutData };
}