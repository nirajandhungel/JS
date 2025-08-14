#include <iostream>
#include <string>
using namespace std;

bool validateEmail(const string &email) {
    size_t index = email.find('@');
    if (index == string::npos) return false; // @ check

    if (email.size() < 4 || email.substr(email.size() - 4) != ".com")
        return false;

    string localPart = email.substr(0, index);
    int count = 0; // letters before @
    bool haveNumber = false;

    for (char c : localPart) {
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            count++;
        }
        if (c >= '0' && c <= '9') {
            haveNumber = true;
        }
    }

    if (count < 6) return false;
    if (!haveNumber) return false;

    return true;
}

int main() {
    cout << boolalpha << validateEmail("sub32@gmail.com") << endl; // false
    cout << boolalpha << validateEmail("subhash32@gmail.com") << endl; // true
}
