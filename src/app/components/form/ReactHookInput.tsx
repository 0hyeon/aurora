import Label from "./Label";
import axios from "axios";

const Emailinput = ({
  type,
  register,
  errorMessage,
  placeholder,
  getValues,
}: any) => {
  return (
    <div>
      <Label value={type} errorMessage={errorMessage} />
      {type === "이메일ID" ? (
        <input
          errorId={!!errorMessage}
          {...register("email", {
            required: "*",
            validate: {
              hasAlpha: (value: any) => {
                const hasAlpha = !!value.match(/[a-zA-Z]/g);

                return hasAlpha ? true : "알파벳으로 작성해주세요.";
              },
              isEmail: (value: any) => {
                const isEmail = !!value.match(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                );

                return isEmail ? true : "이메일 형식이 아닙니다.";
              },
              checkEmailDuplication: async (email: string) => {
                try {
                  await axios
                    .post(
                      `${process.env.REACT_APP_SERVER_URL}/api/users/signup/existemail`,
                      {
                        email,
                      }
                    )
                    .then((res) => {
                      return res.data.message;
                    });
                  // alert('중복된 이메일입니다.');
                } catch (error: any) {
                  return error.response.data.message;
                }
              },
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "Nickname" || type === "닉네임" ? (
        <input
          errorId={!!errorMessage}
          {...register("nickname", {
            required: "*",
            minLength: {
              value: 4,
              message: "longer more than 4",
            },
            validate: (value: any) => {
              const hasAlpha = !!value.match(/[a-zA-Z]/g);

              return hasAlpha ? true : "must be include alpha";
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "Search" || type === "검색" ? (
        <input
          errorId={!!errorMessage}
          {...register("search", {
            required: "*",
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "아이디" ? (
        <input
          errorId={!!errorMessage}
          {...register("email", {
            required: "*",
            validate: {
              hasAlpha: (value: any) => {
                const hasAlpha = !!value.match(/[a-zA-Z]/g);

                return hasAlpha ? true : "알파벳으로 작성해주세요.";
              },
              isEmail: (value: any) => {
                const isEmail = !!value.match(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                );

                return isEmail ? true : "이메일 형식이 아닙니다.";
              },
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "기업명" ? (
        <input
          errorId={!!errorMessage}
          {...register("companyName", {
            required: "*",
            minLength: {
              value: 1,
              message: "기업명을 입력해주세요.",
            },
            maxLength: {
              value: 15,
              message: "15글자 미만입니다.",
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "기업대표수신이메일" ? (
        <input
          errorId={!!errorMessage}
          {...register("companyEmail", {
            required: "*",
            validate: {
              hasAlpha2: (value: any) => {
                const hasAlpha2 = !!value.match(/[a-zA-Z]+/);
                return hasAlpha2 ? true : "알파벳으로 작성해주세요.";
              },
              isEmail2: (value: any) => {
                const isEmail2 = !!value.match(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                );
                return isEmail2 ? true : "이메일 형식이 아닙니다.";
              },
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "휴대폰번호" ? (
        <input
          errorId={!!errorMessage}
          {...register("phoneNumber", {
            required: "*",
            validate: {
              isNum: (value: any) => {
                const isNum = !!value.match(/^\d{11}$/);

                return isNum ? true : "(-)를 제외한 11자리를 입력해주세요.";
              },
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "비밀번호확인" ? (
        <input
          errorId={!!errorMessage}
          {...register("passwordCheck", {
            required: "*",
            validate: {
              matchesPreviousPassword: (value: any) => {
                const password = getValues("password");
                return password === value || "비밀번호가 일치하지 않습니다.";
              },
            },
          })}
          type="password"
          placeholder={placeholder}
        />
      ) : type === "이름" ? (
        <input
          errorId={!!errorMessage}
          {...register("name", {
            required: "*",
            validate: {
              isName: (value: any) => {
                const isName = !!value.match(/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/);

                return isName ? true : "한글 영어만 입력해주세요.";
              },
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : type === "회사전화번호" ? (
        <input
          errorId={!!errorMessage}
          {...register("companyNumber", {
            required: "*",
            validate: {
              isNumber: (val: any) => {
                const isNumber = !!val.match(/^[0-9]+$/);
                return isNumber ? true : "숫자만 입력해주세요.";
              },
            },
            maxLength: {
              value: 15,
              message: "15글자 미만입니다.",
            },
          })}
          type="text"
          placeholder={placeholder}
        />
      ) : (
        <input
          errorId={!!errorMessage}
          {...register("password", {
            required: "*",
            validate: {
              isPassword: (value: any) => {
                const isPassword = !!value.match(
                  /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/
                );
                return isPassword
                  ? true
                  : "대문자 1자리 이상 포함 영문, 숫자 포함 8~20자리 입력해주세요.";
              },
            },
          })}
          type="password"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Emailinput;
