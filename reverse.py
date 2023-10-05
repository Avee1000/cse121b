def reverse_word(word):
    # Use string slicing to reverse the word
    reversed_word = word[::-1]
    return reversed_word

# Example usage
input_word = input("word? ")
reversed_input = reverse_word(input_word)
print(reversed_input)