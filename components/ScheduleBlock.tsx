import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";

const DragContent = styled.div``;

const Content = styled.div``;

const ScheduleBlock = () => {
  const [datas, setDatas] = useState([
    { key: "item-1", content: "item-1" },
    { key: "item-2", content: "item-2" },
    { key: "item-3", content: "item-3" },
    { key: "item-4", content: "item-4" },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result) {
      return;
    }

    const { destination, source } = result;

    if (destination.index === source.index) {
      return;
    }

    setDatas((prev) => {
      const sourceData = datas[source.index];
      let newDatas = prev;
      newDatas.splice(source.index, 1);
      newDatas.splice(destination.index, 0, sourceData);

      return newDatas;
    });
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="Drop">
          {(provided, snapshot) => (
            <DragContent {...provided.droppableProps} ref={provided.innerRef}>
              <p>Drag</p>
              {datas.map((data, index) => (
                <Draggable key={data.key} draggableId={data.key} index={index}>
                  {(provided, snapshot) => (
                    <Content
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {data.content}
                    </Content>
                  )}
                </Draggable>
              ))}
            </DragContent>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ScheduleBlock;
