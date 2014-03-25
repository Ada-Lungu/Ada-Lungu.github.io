
def decryption(crypted_text, the_alphabet):

    alphabet_letters = []
    letters_and_equivalents = {}
    decrypted_string = ""

    for each_char in the_alphabet:
        alphabet_letters.append(each_char)

    # put into a dictionary all the letters of the alphabet as keys, and the correspondentent letter as values

    for i in range(0,len(alphabet_letters)-2):
        letters_and_equivalents[alphabet_letters[i]] = alphabet_letters[i+2]
    letters_and_equivalents["y"] = "a"
    letters_and_equivalents["z"] = "b"

    for each_char in crypted_text:
        if each_char in letters_and_equivalents:
            decrypted_string += letters_and_equivalents[each_char]
        else:
            decrypted_string += each_char

    #find each_char in dict and give me value
    return decrypted_string


the_alphabet = "abcdefghijklmnopqrstuvwxyz"
crypted_text = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

print decryption(crypted_text,the_alphabet)


# version 2

def decryption2(crypted_text):

    intab = "abcdefghijklmnopqrstuvwxyz"
    outtab = "cdefghijklmnopqrstuvwxyzab"
    decrypted_text = maketrans(intab, outtab)

    return decrypted_text

crypted_text = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

print decryption()


