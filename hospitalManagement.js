class Patient {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.medicalHistory = [];
    }
  
    addMedicalRecord(record) {
      this.medicalHistory.push(record);
      console.log(`Medical record added for ${this.name}: ${record}`);
    }
  
    viewMedicalHistory() {
      console.log(`Medical history for ${this.name}:`);
      this.medicalHistory.forEach((record, index) => {
        console.log(`${index + 1}. ${record}`);
      });
    }
  }

class Appointment {
    constructor(patient, doctor, timeSlot) {
      this.patient = patient;
      this.doctor = doctor;
      this.timeSlot = timeSlot;
      this.status = "Scheduled"; // Can be "Scheduled", "Completed", or "Cancelled"
    }
  
    completeAppointment() {
      this.status = "Completed";
      console.log(`Appointment completed for ${this.patient.name} with Dr. ${this.doctor.name}.`);
    }
  
    cancelAppointment() {
      this.status = "Cancelled";
      console.log(`Appointment cancelled for ${this.patient.name} with Dr. ${this.doctor.name}.`);
    }
  
    getAppointmentDetails() {
      return {
        patient: this.patient.name,
        doctor: this.doctor.name,
        timeSlot: this.timeSlot,
        status: this.status,
      };
    }
  }

  class Doctor {
    constructor(name, specialization) {
      this.name = name;
      this.specialization = specialization;
      this.availability = []; // Array of available time slots
    }
  
    addAvailability(timeSlot) {
      this.availability.push(timeSlot);
      console.log(`Availability added for Dr. ${this.name}: ${timeSlot}`);
    }
  
    viewAvailability() {
      console.log(`Availability for Dr. ${this.name}:`);
      this.availability.forEach((slot, index) => {
        console.log(`${index + 1}. ${slot}`);
      });
    }
  }

class Hospital {
    constructor(name) {
      this.name = name;
      this.patients = [];
      this.doctors = [];
      this.appointments = [];
    }
  
    addPatient(patient) {
      this.patients.push(patient);
      console.log(`Patient ${patient.name} added to the hospital system.`);
    }
  
    addDoctor(doctor) {
      this.doctors.push(doctor);
      console.log(`Dr. ${doctor.name} added to the hospital system.`);
    }
  
    scheduleAppointment(patient, doctor, timeSlot) {
      if (!doctor.availability.includes(timeSlot)) {
        console.log(`Dr. ${doctor.name} is not available at ${timeSlot}.`);
        return;
      }
  
      const appointment = new Appointment(patient, doctor, timeSlot);
      this.appointments.push(appointment);
  
      // Remove the time slot from doctor's availability
      doctor.availability = doctor.availability.filter((slot) => slot !== timeSlot);
  
      console.log(`Appointment scheduled for ${patient.name} with Dr. ${doctor.name} at ${timeSlot}.`);
    }
  
    generateBill(patient, amount) {
      console.log(`Bill generated for ${patient.name}: $${amount}`);
    }
  
    viewAllAppointments() {
      console.log("All Appointments:");
      this.appointments.forEach((appointment, index) => {
        const details = appointment.getAppointmentDetails();
        console.log(`${index + 1}. Patient: ${details.patient}, Doctor: ${details.doctor}, Time: ${details.timeSlot}, Status: ${details.status}`);
      });
    }
  }

  // Create patients
const patient1 = new Patient("John Doe", 30, "Male");
const patient2 = new Patient("Jane Smith", 25, "Female");

// Create doctors
const doctor1 = new Doctor("Alice Brown", "Cardiologist");
const doctor2 = new Doctor("Bob Green", "Dermatologist");

// Add availability for doctors
doctor1.addAvailability("10:00 AM");
doctor1.addAvailability("02:00 PM");
doctor2.addAvailability("11:00 AM");

// Create a hospital
const hospital = new Hospital("City Hospital");

// Add patients and doctors to the hospital
hospital.addPatient(patient1);
hospital.addPatient(patient2);
hospital.addDoctor(doctor1);
hospital.addDoctor(doctor2);

// Schedule appointments
hospital.scheduleAppointment(patient1, doctor1, "10:00 AM");
hospital.scheduleAppointment(patient2, doctor2, "11:00 AM");

// View all appointments
hospital.viewAllAppointments();

// Complete an appointment
hospital.appointments[0].completeAppointment();

// Generate a bill
hospital.generateBill(patient1, 200);

// View medical history
patient1.addMedicalRecord("High blood pressure");
patient1.viewMedicalHistory();