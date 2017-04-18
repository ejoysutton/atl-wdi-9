# # Objectives
# Prompt the user for a sentence
# Print a sentence saying if it was a nice message or not
	# Do this via Sentiment API
# Print out how Yoda would say the same message
	# Do this via Yoda Speak API

require 'httparty'
require 'pry'
require 'open-uri'

puts "Input sentence:"

sentence = "Basic input sentence free to use for testing."


url = "https://community-sentiment.p.mashape.com/text/"
body = { "txt" => sentence }
headers = {     
	"X-Mashape-Key" => "vxsSbukt71msh5ZnlRBtYJEQPdk3p1jRambjsnaWDDc2ZeNAJ4",
    "Content-Type" => "application/x-www-form-urlencoded",
    "Accept" => "application/json"

}

response = HTTParty.post(url, {body: body, headers: headers})
sentiment = response["result"]['sentiment']

puts "That was rude." if sentiment == "Negative"
puts "How pleasant." if sentiment == "Positive"
puts "I have no idea" if sentiment == "Neutral"


encoded_sentence = URI::encode(sentence)

url = "https://yoda.p.mashape.com/yoda?sentence=#{encoded_sentence}"
headers = {
    "X-Mashape-Key" => "vxsSbukt71msh5ZnlRBtYJEQPdk3p1jRambjsnaWDDc2ZeNAJ4",
    "Accept" => "text/plain"
}

response = HTTParty.get(url, { headers: headers })
puts "Yoda translation: #{response}"

# binding.pry
