export const Dialpad = ({isHideKeyboard, handleClick, handleDoubleClick, handleChange}) => {
    return (
      <>
      {!isHideKeyboard && (
        <div className="position: absolute left-0 w-full bottom-24">
          <div className="mt-1">
            <button
              type="button"
              id="1"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              1
            </button>
            <button
              type="button"
              id="2"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              2
            </button>
            <button
              type="button"
              id="3"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              3
            </button>
          </div>

          <div className="mt-1">
            <button
              type="button"
              id="4"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              4
            </button>
            <button
              type="button"
              id="5"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              5
            </button>
            <button
              type="button"
              id="6"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded`}
              onClick={handleChange}
            >
              6
            </button>
          </div>
          <div className="mt-1">
            <button
              type="button"
              id="7"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded`}
              onClick={handleChange}
            >
              7
            </button>
            <button
              type="button"
              id="8"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              8
            </button>
            <button
              type="button"
              id="9"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              9
            </button>
          </div>
          <div className="mt-1">
            <button
              type="button"
              id="*"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              *
            </button>
            <button
              type="button"
              id="0"
              className={`bg-figmaGray mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300 postion: relative`}
              data-symbol="+"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
            >
              0<span className={"position: absolute top-1 left-10"}>+</span>
            </button>
            <button
              type="button"
              id="#"
              className={`bg-figmaGray  mx-2 my-1 h-6 w-16 rounded hover:bg-gray-300`}
              onClick={handleChange}
            >
              #
            </button>
          </div>
        </div>
      )}
      </>
    )
}
