
# 1. textul < 42 cuvinte => return text
# 2. textul > 42 cuvinte & include cuvnatul => text [42]
# 3. textul > 42 cuvinte & nu include cuv

# Version 3

def extract_shorter_relevant_example(text, my_word):
    final_text = ""
    forty_list=[]
    list_words = text.split() # ==> gives me a list of the words ["these", "types", ",", "the"]
    nr_words = len(list_words)
    index_my_word = list_words.index(my_word)
    string_list_words = ' '.join(list_words)

    counter = 0
    while counter < 43:
        for each_word in list_words:
            forty_list.append(each_word)
            counter +=1
    string_forty_list = ' '.join(forty_list)

    if nr_words <= 42:
        final_text = final_text + string_list_words
        return nr_words, final_text

    elif nr_words > 42 and index_my_word < 42:
        final_text = final_text + string_forty_list
        return nr_words, final_text

    elif index_my_word > 42:
        for i in range(43, index_my_word+1):
            forty_list.append(i)
            final_text = final_text + string_forty_list

        return nr_words, final_text


text_1 = "once one is at level b1 he is already brave enough to start reading texts in the target language. however, he will still encounter word that he does not understand quite often. thus, he theoretically could start reading literature on the target language, but practically, it is so annoying to constantly search for words will be so boring as to completely repel him. "
word_1 = "understand"

text_2 = "we are together all in this one, no matter what they say;)"
word_2 = "what"

print extract_shorter_relevant_example(text_1, word_1)
print extract_shorter_relevant_example(text_2, word_2)


#list_final_text = final_text.split()
#nr_words_final_text = len(list_final_text)
#return nr_words_final_text


