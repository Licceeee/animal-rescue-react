import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { VERIFYACCOUNT } from "../../api/auth";

export default function ActivateAccount() {
  const { token } = useParams();
  const [response, setResponse] = useState(null);

  const [addTodo, { data, loading, error }] = useMutation(VERIFYACCOUNT);

  useEffect(() => {
    addTodo({ variables: { token: token } });
  }, [addTodo, token]);

  useEffect(() => {
    data && setResponse(data);
    data &&
      data.verifyAccount.errors.nonFieldErrors.map((error) => {
        return console.log(error);
      });
  }, [data]);

  return (
    <div>
      <p>joooo</p>
      <small>{token}</small>
      <p>------------------</p>
      {error && <p>error ... {error.message}</p>}
      {loading && <p>Loading ... </p>}
      {response && response.verifyAccount.success === true && <p>Verified</p>}
      {response &&
        response.verifyAccount.success === false &&
        response.verifyAccount.errors.nonFieldErrors.map((error) => {
          return <p key={error.code}>Error: {error.message}</p>;
        })}
    </div>
  );
}
