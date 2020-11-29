FROM python:3.8

ENV PYTHONUNBUFFERED 1

EXPOSE 8000
# WORKDIR /lead_api

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . ./

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
