export function ForgotPass() {
  return (
    <div>
      <h1>Forgot Password Module</h1>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Old Password"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="New Password"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Re Enter New Password"
          className="form-control"
        />
      </div>

      <div>
        <input
          type="button"
          value="Reset Password"
          className="btn btn-primary w-100"
        />
      </div>
    </div>
  );
}
