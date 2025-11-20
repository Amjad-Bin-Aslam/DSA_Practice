#include<iostream>
using namespace std;

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
    int a = 10;
    int* ptrA = &a;

    cout << *(&a) << endl;
    cout << *(ptrA);


} 

