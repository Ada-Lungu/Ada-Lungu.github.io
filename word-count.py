
# reading a file and counting each word how many times appears in the context

def word_count(file_text):

    word_counter = 0
    words_file_text = file_text.split()
    dict_words_already_found = {}


    for i in (0, len(words_file_text)):
        for j in (i+1, len(words_file_text)):
            if words_file_text[i] not in dict_words_already_found:
                if words_file_text[i] == words_file_text[j]:
                    word_counter += 1
                    dict_words_already_found[i] = word_counter
                else:
                    continue
            else:
                continue


    return dict_words_already_found()


file_text= "Ce sa mai ce sa zicem ce sa mai povestim ce cum sa judecam"
print word_count(file_text)











# cate cuvinte am in text ==> elementul de pe indexul de pe fiecare pozitie cautat
# punem toate cuvintele din file_text intr-o lista
# luam cuvantul ce urmeaza si verificam cu toate cuvintele ramase in lista

# punem intr-un dictionary cuvintele pe acre le-am cautat si de cate ori apar










