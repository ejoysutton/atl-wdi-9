class Author < ApplicationRecord
	has_many :books


	def self.j_books
	books = []
		self.where('name LIKE "J%"').each do |author|
			books << author.books.pluck(:title)
	end
	books.flatten
end
end
