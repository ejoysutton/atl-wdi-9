# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Article.delete_all
Comment.delete_all

article_one = Article.create(content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac libero leo. Cras scelerisque turpis mauris, in placerat quam pharetra sed. Cras mattis neque neque, vitae faucibus mauris varius sit amet.")
article_two = Article.create(content: "Nullam turpis lorem, aliquam sed justo sollicitudin, ullamcorper elementum augue. Fusce quis ante quis dolor malesuada pulvinar. Fusce ac mauris tristique, egestas purus eu, maximus diam.")

Comment.create(content: "This is a pretty bland article.", article_id: article_one.id)
Comment.create(content: "Who wrote this?", article_id: article_one.id)
Comment.create(content: "Inspiring!", article_id: article_two.id)
Comment.create(content: "Give this guy a Pulitzer!!", article_id: article_two.id)