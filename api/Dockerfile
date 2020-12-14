FROM python:3.8

WORKDIR /ads_api

ENV PYTHONUNBUFFERED 1

EXPOSE 8000

COPY requirements.txt /ads_api
RUN pip install -r requirements.txt

COPY . /ads_api

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
