function palindrome(string){
    const reversed = string.split('').reverse().join();
    return string === reversed;
}