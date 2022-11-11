import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function UserCard({ id, employee }) {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              {employee.first_name} {employee.last_name}
            </h5>
            <p className="card-text">{employee?.email}</p>
            <p className="card-text">{employee?.address}</p>

            <Link href={`${router.pathname}/${id}`} className="btn btn-primary">
              View Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
