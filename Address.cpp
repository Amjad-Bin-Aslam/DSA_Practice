#include<iostream>
using namespace std;


// using pointer
// void changeA(int* ptr) {
//     *ptr = 200;
// }


// using alias
void changeA(int &b) {
    b = 20;
}

int main(){

    // int a = 10;
    // cout<<"Address of a in the memory of system: "<<&a<<endl;
    // int* ptr = &a;

    // cout<<ptr;



    // POINTERS
    // pointer are the speacial variables that store the address of other variables 
    // int a = 100;
    // int* ptrA = &a;
    // int** parentPtr = &ptrA;

    // cout << ptrA << endl;
    // cout << &ptrA << endl;
    // cout << parentPtr << endl;




    // Derefrence operator
    // it use to show the value at address
    // int a = 10;
    // int* ptrA = &a;

    // cout << *(&a) << endl;
    // cout << *(ptrA);




    // Null pointer
    // A pointer that does not point to any location
    // and we can not derefrence the null pointer because it does not refer to any valid meomory location

    // int** ptr = NULL;
    // cout << ptr << endl;



    // int a = 5 ;
    // int *p = &a;
    // int **q = &p;

    // cout << *p <<endl;
    // cout << **q <<endl;
    // cout << p <<endl;
    // cout << *q <<endl;




    // Global function is used here
    // calue Pass by reference using pointers
    // int a = 10;
    // changeA(&a);

    // cout << "inside the main func: " << a << endl;



    // value Pass by reference using references (alisa)
    // int a = 10;
    // changeA(a);

    // cout << "Inside the main func: " << a << endl;



    // Array pointer
    // it always store the memory address of first element of array and these are the constant pointer
    int arr[] = { 1,2,3,4,5 };

    cout << *arr << endl;
    cout << arr << endl;

    return 0;

} 

