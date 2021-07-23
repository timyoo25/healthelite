# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Product.destroy_all
User.destroy_all
Category.destroy_all

@admin = User.create!(username:'tim', email: 'tim@email.com', password: 'hihihi')
@admin2 = User.create!(username: 'chris', email: 'chris@email.com', password: '123456')
puts "#{User.count} user(s) created"

@protein = Category.create!(name: "Protein")
@pre_workout = Category.create!(name: "Pre-Workout")
@creatine = Category.create!(name: "Creatine")
@amino_acid = Category.create!(name: "Amino Acids")
@vitamin = Category.create!(name: "Vitamins")

puts "#{Category.count} categories created"

@gold_standard_protein = Product.create!(name: "Optimum Nutrition Gold Standard Whey", description: "Extreme Milk Chocolate - 24g protein, 5.5g BCAAs, 1g Total Fat, 1g Total Sugars / Serving", user: @admin, category: @protein)

@gold_standard_preworkout = Product.create!(name: "Optimum Nutrition Pre-Workout", description: "Blue-Razz", user: @admin, category: @pre_workout)

@animal_pak = Product.create!(name: "Animal Pak", description: "Ultimate Multi-Vitamin", user: @admin2, category: @vitamin)

@x_tend = Product.create!(name: "X-Tend BCAA", description: " Blue-Razz, 7g BCAAs / Serving", user: @admin2, category: @amino_acid)

@createn = Product.create!(name: "Rich Piana CreaTEN", description: "Blue Raspberry, Creapure micronized Creatine monohydrate & Magnapowder", user: @admin, category: @creatine)


@protein_review = Review.create!(body: "This has been a standard for me and my workouts - mixes very smooth and the taste is great!", user: @admin, product: @gold_standard_protein)
@pre_workout_review = Review.create!(body: "Good energy boost and not too much caffeine - great for those who do not like the face tingles", user: @admin2, product: @gold_standard_preworkout)

@protein.products << @gold_standard_protein
@pre_workout.products << @gold_standard_preworkout
@creatine.products << @createn
@amino_acid.products << @x_tend
@vitamin.products << @animal_pak

puts "#{Product.count} product(s) created"

@gold_standard_protein.reviews << @protein_review
@gold_standard_preworkout.reviews << @pre_workout_review

puts "#{Review.count} review(s) created"