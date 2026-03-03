export type Role = "employee" | "teamlead" | "hr";

export type UserProfile = {
  user_id: string;
  email: string;
  role: Role;
  company_id: string;
  employee_id?: string;
};

export type Company = { company_id: string; name: string };

export type Branch = {
  branch_id: string;
  company_id: string;
  name: string;
  lat: number;
  lng: number;
  radius_m: number;
};

export type AttendanceRecord = {
  attendance_id: string;
  employee_id: string;
  work_date: string; // YYYY-MM-DD
  checkin_at?: string | null;
  checkout_at?: string | null;
  source?: "gps" | "manual";
  lat?: number | null;
  lng?: number | null;
};

export type LeaveRequest = {
  leave_request_id: string;
  employee_id: string;
  leave_type_id: string;
  start_date: string;
  end_date: string;
  status: "pending" | "approved" | "rejected" | "cancelled";
  reason?: string | null;
};
