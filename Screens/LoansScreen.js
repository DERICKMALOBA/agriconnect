import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

export default function LoanScreen() {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [repaymentPeriod, setRepaymentPeriod] = useState('');

  return (
    <ScrollView style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
      {/* Loan Application Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Apply for a Loan</Text>
      <TextInput
        placeholder="Enter Loan Amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
        style={{ backgroundColor: 'white', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />
      <Picker selectedValue={loanPurpose} onValueChange={(itemValue) => setLoanPurpose(itemValue)}>
        <Picker.Item label="Select Loan Purpose" value="" />
        <Picker.Item label="Buy Seeds" value="seeds" />
        <Picker.Item label="Expand Land" value="land" />
        <Picker.Item label="Purchase Equipment" value="equipment" />
      </Picker>
      <Picker selectedValue={repaymentPeriod} onValueChange={(itemValue) => setRepaymentPeriod(itemValue)}>
        <Picker.Item label="Select Repayment Period" value="" />
        <Picker.Item label="3 Months" value="3" />
        <Picker.Item label="6 Months" value="6" />
        <Picker.Item label="12 Months" value="12" />
      </Picker>
      <TouchableOpacity style={{ backgroundColor: '#28a745', padding: 15, borderRadius: 5, marginTop: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Submit Application</Text>
      </TouchableOpacity>
      
      {/* Loan Status Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Loan Status</Text>
      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, marginTop: 10 }}>
        <Text>Pending Applications: 1</Text>
        <Text>Approved Loans: 2</Text>
        <Text>Rejected Loans: 0</Text>
      </View>

      {/* Repayment & Loan Management */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Repayment & Loan Management</Text>
      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, marginTop: 10 }}>
        <Text>Outstanding Balance: Ksh 50,000</Text>
        <Text>Next Repayment Date: 25th Feb 2025</Text>
        <ProgressBar progress={0.5} color="#28a745" style={{ marginTop: 10 }} />
        <TouchableOpacity style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginTop: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Make a Payment</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Access Buttons */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Quick Actions</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{ backgroundColor: '#ffcc00', padding: 10, borderRadius: 5, flex: 1, marginRight: 5 }}>
          <Text style={{ textAlign: 'center' }}>Apply for Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#17a2b8', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5 }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>View Repayment Plan</Text>
        </TouchableOpacity>
      </View>

      {/* Loan Tips & FAQs */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Loan Tips & FAQs</Text>
      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, marginTop: 10 }}>
        <Text>📖 How to Improve Your Loan Eligibility</Text>
        <Text>🧐 FAQs on Loan Approval & Repayment</Text>
      </View>
    </ScrollView>
  );
}
